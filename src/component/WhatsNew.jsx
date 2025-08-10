import { Card, InlineStack, Text, Badge, BlockStack, Button } from "@shopify/polaris";
import { MenuHorizontalIcon } from "@shopify/polaris-icons";

const WhatsNew = () => {
    return (
        <Card>
            <BlockStack gap='200'>
                <InlineStack blockAlign="center" align="space-between">
                    <InlineStack gap='200' blockAlign="center" align="space-between">
                        <Text as='h4' variant='headingMd'>🎉 What's New</Text>
                        <Badge>Fulfilled</Badge>
                    </InlineStack>
                    <Button variant="tertiary" icon={MenuHorizontalIcon}>
                    </Button>
                </InlineStack>
                <BlockStack gap='200'>
                    <Text as='p' variant='bodyMd' fontWeight='500' marginBottom='2'>Generate an HTML Sitemap page instantly on your store & help your visitors find all of your pages in one place</Text>
                    <InlineStack>
                        <Button>
                            Check it out
                        </Button>
                    </InlineStack>
                </BlockStack>
            </BlockStack>
        </Card>
    )
}

export default WhatsNew;