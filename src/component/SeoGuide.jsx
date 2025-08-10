import { MediaCard } from "@shopify/polaris";
import Img from "../img/img-2.png";

const SeoGuide = () => {
    return (
        <MediaCard
            title="Get our free Shopify SEO guide"
            primaryAction={{
                content: 'Get the Free eBook',
                onAction: () => { },
            }}
            description="Grab your copy today & discover the secrets to optimizing your Shopify store for search engines"
            popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}
            size="small"
        >
            <img
                alt=""
                width="100%"
                height="100%"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
                src={Img}
            />
        </MediaCard>
    )
}
export default SeoGuide;