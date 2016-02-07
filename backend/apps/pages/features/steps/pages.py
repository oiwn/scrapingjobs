import behave

@begave.given('we have behave installed')
def step_impl(context):
    pass

@behave.when('we implement a test')
def step_impl(context):
    assert True is not False

@behave.then('behave will test it for us')
def step_impl(context):
    assert context.failed is False
