
import {
    Button,
    ButtonGroup,
    Box,
    Card,
    Text,
    Link,
    Divider,
    TextField,
    BlockStack,
    InlineStack,
    Badge,
    Tabs,
    MediaCard,
    VideoThumbnail,
} from '@shopify/polaris';
import { useState, useCallback } from 'react';

const LinkPreviewTab = () => {

    return (

        <>
            <InlineStack blockAlign="center" align='space-between' gap={400}>
                <Text variant="headingMd" as="h4">
                    X Link Preview
                </Text>
                <Button>
                    Change X Image
                </Button>
            </InlineStack>
            <Card padding={0}>
                <img
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ objectFit: 'cover', objectPosition: 'center', borderRadius: '6px' }}
                    src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                />
                <Box style={{ padding: '20px' }}>
                    <Text as="p">
                        WPDeveloper-demo.myshopify.com
                    </Text>
                    <Text variant="headingMd" as="h4">
                        Our Awesome t-shirt
                    </Text>
                    <Text as="p">
                        A great description of your products in 320 characters or less.
                    </Text>
                    {/* <p>Tab {selected} selected</p> */}
                </Box>

            </Card>
        </>
    )
}

export default LinkPreviewTab;