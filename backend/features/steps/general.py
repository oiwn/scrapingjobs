import behave

# Using Django's testing client
@behave.when(u'I visit "{url}"')
def visit(context, url):
    context.response = context.test.client.get(url)

@behave.then(u'I should see "{text}"')
def visit(context, text):
    response = context.response # from previous step
    context.test.assertContains(response, text)
