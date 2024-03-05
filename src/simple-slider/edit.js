/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

// Import useBlockProps & MediaPlaceholder components
import { useBlockProps, MediaPlaceholder } from "@wordpress/block-editor";

import { BlockIcon } from "@wordpress/block-editor";

import { Dashicon } from '@wordpress/components';

// Import ToolbarButton & ToolbarGroup components
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";

// import { Icon, trash } from "@wordpress/icons";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

const icon = "format-gallery";
const MyBlockIcon = () => <BlockIcon icon={ icon } />;

export default function Edit(props) {
	return (
		<div {...useBlockProps()}>
			{__(
				"Horizontal & vertical slider.",
				"gutenberg-simple-blocks-pack",
			)}

			<MediaPlaceholder
				icon={<MyBlockIcon />}
				labels={{
					title: "Simple Slider",
					instructions: "Create an awesome scrollable gallery.",
				}}
				onSelect={(newImages) => props.setAttributes({ images: newImages })}
			/>
		</div>
	);
}
