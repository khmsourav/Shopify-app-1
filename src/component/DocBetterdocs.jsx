import { Card, InlineStack, Text, Box, BlockStack, Button, Popover, ActionList } from "@shopify/polaris";
import { MenuHorizontalIcon, ArchiveIcon, DuplicateIcon } from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';
import Img from "../img/img-3.png";

const DocBetterDocs = () => {

    const [active, setActive] = useState(true);

    const toggleActive = useCallback(() => setActive((active) => !active), []);

    const activator = (
        <Button
            onClick={toggleActive}
            variant="tertiary"
            icon={MenuHorizontalIcon}>
        </Button>
    );

    return (
        <>
            <Card>
                <BlockStack gap='200'>
                    <InlineStack blockAlign="center" align="space-between">
                        <InlineStack gap='200' blockAlign="center" align="space-between">
                            <Text as='h4' variant='headingMd'>Create FAQ & store documentation with BetterDocs</Text>
                        </InlineStack>
                        <Popover
                            active={active}
                            activator={activator}
                            autofocusTarget="first-node"
                            onClose={toggleActive}
                        >
                            <ActionList
                                actionRole="menuitem"
                                items={[
                                    { content: 'Duplicate', icon: DuplicateIcon },
                                    { content: 'Archive', icon: ArchiveIcon },
                                ]}
                            />
                        </Popover>
                    </InlineStack>
                    <InlineStack gap='400' wrap={false}>
                        <BlockStack gap='200'>
                            <Text as='p' variant='bodyMd' fontWeight='500' marginBottom='2'>BetterDocs is the ultimate knowledge base solution to create FAQs and store documentation. It comes with Instant Answers with WhatsApp & Messenger integrations, Quick Order-Tracking, in-depth Analytics, and many more exclusive features.</Text>
                            <Box>
                                <Button>
                                    Check it out
                                </Button>
                            </Box>
                        </BlockStack>
                        <img
                            alt=""
                            width="100%"
                            height="100%"
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                                maxWidth: '100px',
                            }}
                            src={Img}
                        />
                    </InlineStack>
                </BlockStack >
            </Card >
        </>
    )
}
export default DocBetterDocs;