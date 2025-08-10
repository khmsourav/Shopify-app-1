import { Badge, Box, Card, Collapsible, Divider, Icon, InlineStack, Text } from "@shopify/polaris";
import { ChevronDownIcon } from "@shopify/polaris-icons";
import { Children, useCallback, useState } from "react";

const AccordionWrapper = ({ children, title, badgeTone, badgeText, padding = '400' }) => {
    const [open, setOpen] = useState(true);

    const handleToggle = useCallback(() => setOpen((open) => !open), []);


    return (
        <Card padding={0}>
            <div style={{ cursor: 'pointer' }}>
                <Box paddingBlock='200' paddingInline='400' element='li' onClick={handleToggle}>
                    <InlineStack align="space-between" blockAlign="center">
                        <InlineStack gap='200'>
                            <Text as="h4" variant="headingSm">{title}</Text>
                            {badgeText && <Badge size="small" tone={badgeTone}>{badgeText}</Badge>}
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
                <Box padding={padding}>
                    {children}
                </Box>
            </Collapsible>


        </Card>
    )
}

export default AccordionWrapper;