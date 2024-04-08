/* /**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save(props) {

	let blockProps = useBlockProps.save({
		className: "swiper",
	});

	return (
		<div {...blockProps}>
			<>
				<div class="swiper-wrapper">
					{props.attributes.images.map((image, index) => (
						<div class="swiper-slide">
							<figure>
								<img
									key={index}
									src={image.url}
									alt={image.alt}
									title={image.title}
								/>
								<figcaption>{image.caption}</figcaption>
							</figure>
						</div>
					))}
				</div>
			</>
		</div>
	);
}