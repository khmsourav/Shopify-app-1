import { Card, InlineStack, BlockStack, Text, Button, Icon, Tooltip, Box } from "@shopify/polaris";
import { ProgressBar } from '@shopify/polaris';
import {
    InfoIcon
} from '@shopify/polaris-icons';

const UpgradePlan = () => {
    return (
        <Card>
            <BlockStack gap="200">
                <InlineStack align="space-between">
                    <InlineStack blockAlign="center" gap='200'>
                        <Text as='h4' variant='headingMd'>Image Optimizer (Current Plan: Basic: 1000 Images/Month)</Text>
                        <InlineStack blockAlign="center" gap="100">
                            <Tooltip content="How to increase monthly usage limits?">
                                <Icon
                                    source={InfoIcon}
                                    tone="base"
                                />
                            </Tooltip>
                        </InlineStack>
                    </InlineStack>
                    <Button>
                        Upgrade your plan
                    </Button>
                </InlineStack>
                <InlineStack blockAlign="center" align="space-between" gap="200">
                    <Text as='p' variant='bodyMd' fontWeight='500' tone="subdued">700/1000 Images</Text>
                    <Text as='p' variant='bodyMd' fontWeight='500' tone="subdued">Monthly usage resets in 2 days</Text>
                </InlineStack>
                <ProgressBar progress={60} size="small" tone="success" />
            </BlockStack>
        </Card>
    )
}
export default UpgradePlan;