import { Badge, BlockStack, Box, Card, Icon, InlineStack, Text } from "@shopify/polaris"
import { MoonIcon, XIcon, SunIcon, CheckIcon } from "@shopify/polaris-icons";

const TrueFalseWrapper = ({ title, subTitle, issues }) => {
    return (
        <Box>
            <InlineStack gap={200} blockAlign='center' align="space-between">
                <div style={{ flex: '1' }}>
                    <Text>{subTitle}</Text>
                    <Text>{title}</Text>
                </div>
                {/* <Box>{subTitle}</Box> */}
                <Box>
                    <Icon source={issues ? SunIcon : MoonIcon} tone={issues ? "success" : "critical"} />
                </Box>
            </InlineStack>
        </Box>
    )
}

export default TrueFalseWrapper;