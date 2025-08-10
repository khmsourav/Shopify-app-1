
import {
    Tag, Text, Card, InlineStack, Button, BlockStack, Box, TextField
} from '@shopify/polaris';
import { useState, useCallback } from 'react';

export default function Tags() {
    const [tags, setTags] = useState(['Rustic', 'Antique', 'Vinyl', 'Refurbished']);
    const [textFieldValue, setTextFieldValue] = useState('');

    const handleTextFieldChange = useCallback(
        (value) => setTextFieldValue(value),
        [],
    );

    const removeTag = useCallback(
        (tag) => () => {
            setTags((previousTags) =>
                previousTags.filter((previousTag) => previousTag !== tag),
            );
        },
        [],
    );

    const tagMarkup = tags.map((option) => (
        // <InlineStack key={option} gap='200'>
        <Tag onRemove={removeTag(option)} key={option}>{option}</Tag>
        // </InlineStack>
    ));

    return (
        <TextField
            label="Tags"
            value={textFieldValue}
            onChange={handleTextFieldChange}
            placeholder="Search tags"
            autoComplete="off"
            verticalContent={<InlineStack gap='200'>{tagMarkup}</InlineStack>}
        />
    );
}
