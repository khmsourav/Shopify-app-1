import { Card, BlockStack, InlineStack, Text, Box, Link } from "@shopify/polaris";
export default function StayTuned({ logo, title, subTitle, icon }) {
    return (
        <Card>
            <InlineStack blockAlign='center' gap='400' align='space-between'>
                <InlineStack gap='200'>
                    <Box>
                        {logo}
                    </Box>
                    <BlockStack gap='100'>
                        <Text as='h3' variant='headingMd'>{title}</Text>
                        <Text as='p' variant='bodySm' fontWeight='500'>{subTitle}</Text>
                    </BlockStack>
                </InlineStack>
                <Link removeUnderline>
                    {icon}
                </Link>
            </InlineStack>
        </Card >
    );
}
