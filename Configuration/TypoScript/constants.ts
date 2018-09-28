meinpflegeberuf {
	site {
		#domain = meinpflegeberuf.local
		domain = www.mein-pflegeberuf.de

		logoFile =
		name = Mein Pflegeberuf
	}

	pageIds {
		root = 2

		metaNaviRoot = 16
		socialNaviRoot = 9

		#quickform = 22
		#contact = 6

        # DE version root page
		home_de = 2
		# Other languages home
		home_en = 118

		stellenList =
	}
	contentIds {
		contact = 4
	}

	features {
		use_quicklink = 0
		use_lang_switch = 0
	}

	text {
		de = deutsch
		pl = polnisch

		stellenangebote = Stellenangebote
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
