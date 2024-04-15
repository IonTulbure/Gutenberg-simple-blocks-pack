/* /**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

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
				<div className="swiper-wrapper">
					{props.attributes.images.map((image, index) => (
						<div className="swiper-slide" key={index}>
							<figure>
								<img
									src={image.url}
									alt={image.alt}
									title={image.title}
								/>
								<figcaption>{image.caption}</figcaption>
							</figure>
						</div>
					))}
				</div>
				<div className="swiper-pagination"></div>

				{/* navigation */}
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>

				<div className="swiper-scrollbar"></div>
			</>
		</div>
	);
}