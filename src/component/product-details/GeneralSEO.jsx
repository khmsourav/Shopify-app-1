
import {
    Box,
    Card,
    Button,
    Collapsible,
    Text,
    Link,
    Divider,
    TextField,
    BlockStack,
    InlineStack,
    Badge,
} from '@shopify/polaris';
import {
    CaretDownIcon
} from '@shopify/polaris-icons';
import Img from "../../img/product-1.png";
import { useState, useCallback } from 'react';
import Tags from './Tags';
import PreviewSnippet from './PreviewSnippet';

export default function GeneralSEO() {

    const [open, setOpen] = useState(true);

    const handleToggle = useCallback(() => setOpen((open) => !open), []);
    const [metaTitle, setMetaTitle] = useState('T-shirt');
    const [metaDescription, setMetaDescription] = useState('Our awesome T-shirt in 70 characters or less.');

    const handleMetaTitle = useCallback(
        (value) => setMetaTitle(value),
        [],
    );

    const handleMetaDescription = useCallback(
        (value) => setMetaDescription(value),
        [],
    );

    return (
        <BlockStack gap={300}>

            <BlockStack gap={200}>
                <Text variant="headingMd" as="p" style={{ paddingTop: '20px' }}>
                    Product Name
                </Text>
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
            </BlockStack>
            <BlockStack gap={200}>
                <TextField
                    style={{ paddingBottom: '20px' }}
                    label="Store name"
                    value={metaTitle}
                    onChange={handleMetaTitle}
                    autoComplete="off"
                    showCharacterCount
                />

                <InlineStack blockAlign="center" align="flex-end">

                    <Button
                        ariaControls="basic-collapsible"
                        style={{ paddingTop: '10px' }}
                    >
                        Revert
                    </Button>
                </InlineStack>
            </BlockStack>
            <BlockStack gap={200}>
                <TextField
                    style={{ paddingBottom: '20px' }}
                    label="Store name"
                    value={metaDescription}
                    onChange={handleMetaDescription}
                    autoComplete="off"
                    showCharacterCount
                    multiline={3}
                />

                <InlineStack blockAlign="center" align="flex-end">

                    <Button
                        ariaControls="basic-collapsible"
                        style={{ paddingTop: '10px' }}
                    >
                        Revert
                    </Button>
                </InlineStack>
            </BlockStack>
            <BlockStack gap={200}>

                <Text variant="headingSm" as="p">
                    Keyword Suggestions
                </Text>

                <InlineStack blockAlign="center" gap={200}>
                    <Badge>t-shirt</Badge>
                    <Badge>Clickable tag</Badge>
                    <Badge>Clickable tag</Badge>
                    <Badge>Clickable tag</Badge>
                    <Badge>Clickable tag</Badge>
                </InlineStack>
            </BlockStack>

            <Tags />

        </BlockStack>

    );
}
