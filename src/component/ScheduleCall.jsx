import { MediaCard } from "@shopify/polaris";
import Img from "../img/img-1.png";
import {
    PhoneIcon
} from '@shopify/polaris-icons';

const ScheduleCall = () => {
    return (
        <MediaCard
            title="Want to schedule a call?"
            primaryAction={{
                icon: PhoneIcon,
                content: 'Talk to SEO Expert ',
                onAction: () => { },
            }}
            description="We have an in-house SEO expert who can audit your store and guide you in enhancing its SEO. Would you like to book a one-on-one session with them? It’s completely FREE!"
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
export default ScheduleCall;