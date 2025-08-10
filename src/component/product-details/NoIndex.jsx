
import {
    Text,
    BlockStack,
    Divider,
    Box,
    Card,
    ProgressBar,
    InlineStack,
    Badge,
    Icon,
    Button
} from '@shopify/polaris';
import {
    AlertCircleIcon
} from '@shopify/polaris-icons';

export default function NoIndex() {
    return (
        <Card>
            <BlockStack gap={300}>
                <InlineStack align='space-between' blockAlign='Center' >
                    <InlineStack gap={100} align='center'>
                        <Text variant="headingMd" as="p" style={{ paddingBottom: '20px' }}>
                            No Idex
                        </Text>
                        <Badge>On</Badge>
                        <Icon source={AlertCircleIcon}
                            tone="base" />
                    </InlineStack>
                    <Button>
                        Turn off
                    </Button>
                </InlineStack>

                <BlockStack>
                    <Text variant='headingXs' as='p'>
                        Stop search engines indexing
                    </Text>
                </BlockStack>
            </BlockStack>
        </Card>
    );
}
