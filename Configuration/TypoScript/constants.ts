meinpflegeberuf {
	site {
		domain = dev.befra-energietechnik.de

		logoFile = EXT:meinpflegeberuf/Resources/Public/Images/logo_befra_web.svg
		name = Mein Pflegeberuf
	}

	pageIds {
		root = 1
		metaNaviRoot = 9

		quickform = 22
		contact = 6
	}

	quickformUid = 33
}

/**
* scriptmerger_constants.ts
*
*/

plugin.tx_scriptmerger.css.compress.enable = 0
plugin.tx_scriptmerger.javascript.compress.enable = 0
plugin.tx_scriptmerger.css.enable = 0

/**
* Activate lightbox
*
*/
styles.content.textmedia.linkWrap.lightboxEnabled = 1

/**
* Fluid Styled Content
*
*/
styles.templates.layoutRootPath = EXT:meinpflegeberuf/Resources/Extensions/fsc/Layouts/
styles.templates.templateRootPath = EXT:meinpflegeberuf/Resources/Extensions/fsc/Templates/
styles.templates.partialRootPath = EXT:meinpflegeberuf/Resources/Extensions/fsc/Partials/

<INCLUDE_TYPOSCRIPT: source="DIR:EXT:meinpflegeberuf/Configuration/TypoScript/Constants/" extension="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:meinpflegeberuf/Configuration/TypoScript/Extensions/" extension="tsconst">
