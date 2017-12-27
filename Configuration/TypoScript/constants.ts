meinpflegeberuf {
	site {
		#domain = meinpflegeberuf.local
		domain = www.mein-pflegeberuf.de

		logoFile = EXT:meinpflegeberuf/Resources/Public/Images/logo_mein_pflegeberuf.jpg
		name = Mein Pflegeberuf
	}

	pageIds {
		root = 2

		metaNaviRoot = 16
		socialNaviRoot = 9

		#quickform = 22
		#contact = 6
	}


	#quickformUid = 33
}
[hostname = meinpflegeberuf.local] || [globalString = IENV:HTTP_HOST = meinpflegeberuf.local]
	meinpflegeberuf.site.domain = meinpflegeberuf.local
[global]

/**
* images
*/
styles.content.textmedia.maxW = 1200
styles.content.textmedia.maxWInText = 1200

/**
* scriptmerger_constants.ts
*
*/

plugin.tx_scriptmerger.css.compress.enable = 0
plugin.tx_scriptmerger.javascript.compress.enable = 0

plugin.tx_scriptmerger.css.enable = 1
plugin.tx_scriptmerger.javascript.enable = 1
plugin.tx_scriptmerger.javascript.body = 1

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

/**
* Includes
*
*/
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:meinpflegeberuf/Configuration/TypoScript/Constants/" extension="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:meinpflegeberuf/Configuration/TypoScript/Extensions/" extension="tsconst">
# Gridelements
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/constants.ts">
