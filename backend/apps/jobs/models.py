from __future__ import unicode_literals

from django.db import models
from django.utils.translation import ugettext_lazy as _


class Job(models.Model):
    # project duration
    ONE_DAY = '1d'
    FEW_DAYS = 'Xd'
    FEW_WEEKS = 'Xw'
    FEW_MONTHS = 'Xm'
    PROJECT_DURATION_CHOICES = (
        (ONE_DAY, '1 day'),
        (FEW_DAYS, 'Few days'),
        (FEW_WEEKS, 'Few weeks'),
        (FEW_MONTHS, 'Few months'),
    )

    # project status
    INACTIVE = 0
    TEMPORARY = 1
    ACTIVE = 2
    DONE = 3
    JOB_STATUS_CHOICES = (
        (INACTIVE, _('Inactive')),
        (TEMPORARY, _('Temporary')),
        (ACTIVE, _('Active')),
        (DONE, _('Done')),
    )

    title = models.CharField(max_length=100, blank=False)
    description = models.TextField(blank=False)
    customer = models.CharField(max_length=100, blank=False)

    required_skills = models.CharField(max_length=100, blank=False)
    budget = models.PositiveIntegerField(blank=True)
    duration = models.CharField(max_length=2, choices=PROJECT_DURATION_CHOICES,
                                default=ONE_DAY)
    status = models.IntegerField(choices=JOB_STATUS_CHOICES, default=TEMPORARY)

    views_count = models.PositiveIntegerField(editable=False, default=0)
    spotlight = models.BooleanField(_('Spotlight'), default=False)

    poster_email = models.EmailField(
        _('Poster email'), blank=False,
        help_text=_('Applications will be sent to this address.'))

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
