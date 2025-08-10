import { Badge, Box, Button, Card, Collapsible, Divider, Icon, InlineStack, Text } from "@shopify/polaris";
import { ChevronDownIcon } from "@shopify/polaris-icons";
import { useState, useCallback, Children } from 'react';

const AnalysisWrapper = ({ title, children, badgeContent }) => {

    const [open, setOpen] = useState(false);

    const handleToggle = useCallback(() => setOpen((open) => !open), []);
    return (
        <Card padding={0}>
            <div style={{ cursor: 'pointer' }}>
                <Box paddingBlock='200' paddingInline='400' onClick={handleToggle}>
                    <InlineStack align='space-between' blockAlign='center'>
                        <InlineStack gap={200}>
                            <Text as="h4" variant="headingSm">
                                {title}
                            </Text>
                            <Badge tone='attention'>{badgeContent}</Badge >
                        </InlineStack>
                        <Box>
                            <Icon source={ChevronDownIcon} />
                        </Box>
                    </InlineStack>
                </Box>
            </div>

            <Divider borderColor="input-border" />

            <Collapsible
                open={open}
                id="basic-collapsible"
                transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
                expandOnPrint
            >
                <Box padding={400}>
                    {children}
                </Box>
            </Collapsible>

        </Card>
    )
}

export default AnalysisWrapper;