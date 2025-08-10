import { Card, InlineStack, Text, Icon, BlockStack, Button, Box, Popover, ActionList } from "@shopify/polaris";
import { MenuHorizontalIcon, RedoIcon, XIcon } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";


const GetStarted = () => {

    const getStartedActions = [
        { content: 'Remind Me Later', icon: RedoIcon },
        { content: 'Dismiss', icon: XIcon, destructive: true, }
    ]

    const [getStartedAction, setGetStartedAction] = useState(true);

    const handleGetStartedPopover = useCallback(
        () => setGetStartedAction((prevState) => !prevState),
        [],
    );

    const activator = <Button icon={MenuHorizontalIcon} onClick={handleGetStartedPopover} variant="tertiary"></Button>

    return (
        <Card>
            <BlockStack gap='200'>
                <InlineStack blockAlign="center" align="space-between">
                    <Text as='h4' variant='headingMd'>Get Started</Text>

                    <Popover
                        active={getStartedAction}
                        activator={activator}
                        autofocusTarget="first-node"
                        onClose={handleGetStartedPopover}
                    >
                        <ActionList
                            actionRole="menuitem"
                            items={getStartedActions}
                        />
                    </Popover>
                </InlineStack>
                <BlockStack gap='200'>
                    <Text as='p' variant='bodyMd' fontWeight='500' marginBottom='2'>Solve your SEO issues and optimize your products instantly</Text>
                    <Box>
                        <Button variant="primary">
                            Optimized your products
                        </Button>
                    </Box>
                </BlockStack>
            </BlockStack>
        </Card>
    )
}

export default GetStarted;