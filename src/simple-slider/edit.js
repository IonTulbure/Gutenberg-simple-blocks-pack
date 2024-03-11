/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

// Import useBlockProps & MediaPlaceholder components
import { useBlockProps, MediaPlaceholder } from '@wordpress/block-editor';

// Import BlockControls component
import { BlockControls } from '@wordpress/block-editor';

import { BlockIcon } from '@wordpress/block-editor';

import { Dashicon } from '@wordpress/components';

// Import PanelBody, TextControl, ToggleControl components
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

// Import ToolbarButton & ToolbarGroup components
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';

// Import MediaUpload & MediaUploadCheck components
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

// Import gallery icon
import { gallery } from '@wordpress/icons';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

// gallery icon for MediaPlaceholder block
const MediaPlaceholderBlockIcon = () => <BlockIcon icon={gallery} />;

// block title
/* const BlockTitle = () => {
	__("Horizontal & vertical slider.", "gutenberg-simple-blocks-pack");
}; */

export default function Edit(props) {
	const hasImages = props.attributes.images.length > 0;

	return (
		<div {...useBlockProps()}>
			{/* Block controls */}
			<BlockControls>
				<ToolbarGroup>
					<MediaUploadCheck>
						<MediaUpload
							multiple
							gallery
							addToGallery={true}
							onSelect={(newImages) =>
								props.setAttributes({ images: newImages })
							}
							allowedTypes={["image"]}
							value={props.attributes.images.map((image) => image.id)}
							render={({ open }) => (
								<ToolbarButton onClick={open}>
									{__("Edit Slider", "gutenberg-simple-blocks-pack")}
								</ToolbarButton>
							)}
						/>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>

			{/* Display images if any exist */}
			{hasImages && (
				<figure className="simple-hv-slider-inner-container">
					{props.attributes.images.map((image, index) => (
						<img key={index} src={image.url} alt={image.alt} title={image.title} />
					))}
				</figure>
			)}

			{/* If gallery has no images display MediaPlaceholder */}
			{!hasImages && (
				<MediaPlaceholder
					multiple
					gallery
					icon={<MediaPlaceholderBlockIcon />}
					labels={{
						title: "Horizontal & vertical slider.",
						instructions: "Create an awesome simple slider.",
					}}
					onSelect={(newImages) => props.setAttributes({ images: newImages })}
				/>
			)}
		</div>
	);
}
