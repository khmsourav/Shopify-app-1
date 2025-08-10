
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
    CalloutCard,
} from '@shopify/polaris';
import { useState, useCallback } from 'react';

import Img from "../../img/img-3.png";

const GoogleTab = () => {
    const [isFirstButtonActive, setIsFirstButtonActive] = useState(true);

    const handleFirstButtonClick = useCallback(() => {
        if (isFirstButtonActive) return;
        setIsFirstButtonActive(true);
    }, [isFirstButtonActive]);

    const handleSecondButtonClick = useCallback(() => {
        if (!isFirstButtonActive) return;
        setIsFirstButtonActive(false);
    }, [isFirstButtonActive]);

    return (


        <>
            <InlineStack blockAlign="center" align='space-between' gap={400}>
                <Text variant="headingMd" as="h4">
                    Google Search Preview
                </Text>
                <ButtonGroup variant="segmented">
                    <Button pressed={isFirstButtonActive} onClick={handleFirstButtonClick}>
                        Desktop
                    </Button>
                    <Button pressed={!isFirstButtonActive} onClick={handleSecondButtonClick}>
                        Mobile
                    </Button>
                </ButtonGroup>
            </InlineStack>
            <InlineStack align='space-between' gap='400' wrap={false}>
                <BlockStack gap='200'>
                    <Text as='h3' variant='bodyLg' tone='secondary' fontWeight='500' marginBottom='2'>Our Awesome t-shirt</Text>
                    <Text as='p' variant='bodySm' fontWeight='500' marginBottom='2'>A great description of your products.</Text>

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
        </>
    )
}

export default GoogleTab;