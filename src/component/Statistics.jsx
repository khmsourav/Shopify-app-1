
import { BlockStack, Box, Card, InlineStack, Text, } from '@shopify/polaris';
export default function Statistics({ title, subTitle, chart }) {
    return (
        <Card>
            <InlineStack blockAlign='center' gap='200' align='space-between'>
                <BlockStack gap='200'>
                    <Text as='h3' variant='headingLg'>{title}</Text>
                    <Text as="p" variant='bodyMd' fontWeight='500'>{subTitle}</Text>
                </BlockStack>
                <Box>
                    {chart}
                </Box>
            </InlineStack>
        </Card>

    );
}
