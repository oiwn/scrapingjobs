from django.views.generic.base import TemplateView


class IndexPageView(TemplateView):
    template_name = "index.html"

    def get_context_data(self, **kwargs):
        context = super(IndexPageView, self).get_context_data(**kwargs)
        return context


class ContactsPageView(TemplateView):
    template_name = "contacts.html"


class AboutPageView(TemplateView):
    template_name = "about.html"
