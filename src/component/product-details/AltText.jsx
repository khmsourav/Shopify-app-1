import { BlockStack, Button, InlineGrid, InlineStack, Text, TextField } from "@shopify/polaris";
import { useState, useCallback } from 'react';
import Img from "../../img/product-1.png";

const AltText = () => {

    const [open, setOpen] = useState(true);

    const handleToggle = useCallback(() => setOpen((open) => !open), []);
    const [metaTitle, setMetaTitle] = useState('T-shirt');
    const [metaDescription, setMetaDescription] = useState('Our awesome T-shirt in 70 characters or less.');

    const handleMetaTitle = useCallback(
        (value) => setMetaTitle(value),
        [],
    );

    return (
        <>
            <InlineStack gap={400}>
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
                <div style={{ flex: 1 }}>
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
                </div>
            </InlineStack>
        </>
    )
}

export default AltText;