# Template

page = PAGE
page.10 = FLUIDTEMPLATE
page.10 {
	templateName = Page
	layoutRootPaths {
		10 = EXT:meinpflegeberuf/Resources/Private/Layouts
	}

	templateRootPaths {
		10 = EXT:meinpflegeberuf/Resources/Private/Templates
	}

	partialRootPaths {
		10 = EXT:meinpflegeberuf/Resources/Private/Partials
	}
}

page.meta {
	viewport = width=device-width, initial-scale=1
	# bing webmaster
	#msvalidate\.01 = 02FC1675B548F7BD5B15EF669CF55844
	# google site verification
	#google-site-verification = 9x4g8j2RqMmROgs0wXzcCpTN6Qrusl9gNYabbr5sdRI
}

# kills jquery
#config.moveJsFromHeaderToFooter = 1

config.baseURL = http://{$meinpflegeberuf.site.domain}/
config.tx_realurl_enable = 1
config.tx_frontend_editing = 0

#
# Styles & Scripts

page.includeCSS {
	main = EXT:meinpflegeberuf/Resources/Public/Css/main.css

	print = EXT:meinpflegeberuf/Resources/Public/Css/print.css
	print.media = print
}

// Typekit
page.headerData.333 = TEXT
page.headerData.333.value (
<script src="https://use.typekit.net/vja5ysq.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
)

page.includeJS.modernizr = EXT:meinpflegeberuf/Resources/Public/JavaScripts/vendor/modernizr.js
page.includeJS.vendor = EXT:meinpflegeberuf/Resources/Public/JavaScripts/vendor.js

page.includeJSFooterlibs {
	plugins = EXT:meinpflegeberuf/Resources/Public/JavaScripts/plugins.js
}

page.includeJSFooter {
	main = EXT:meinpflegeberuf/Resources/Public/JavaScripts/main.js
}

#
# Fix missing lib.content.get
lib.content_get =< styles.content.get
lib.content_get {
	select {
		languageField = sys_language_uid
		where = {#colPos}=0
	}
}

/**
* Content Elements
* & Variables
*
*/
page.10.variables {
	layout = TEXT
	layout.data = levelfield:-2,backend_layout_next_level,slide
	layout.override.field = backend_layout

	hasStage = TEXT
	hasStage.value = 1

	logoFile = FILE
	logoFile.file = {$meinpflegeberuf.site.logoFile}

	sitename = TEXT
	sitename.value = {$meinpflegeberuf.site.name}

	pageIds_root = TEXT
	pageIds_root.value = {$meinpflegeberuf.pageIds.root}
}

/**
* Content Blocks
*/

lib {
	// Navis
	//

	nav {
		main = HMENU
		main {
			wrap = <ul class="nav">|</ul>
			1 = TMENU
			1 {
				expAll = 1

				NO = 1
				NO.wrapItemAndSub = <li class="nav-item">|</li>
				NO.ATagParams = class=nav-link

				ACT < .NO
				ACT.wrapItemAndSub = <li class="nav-item active">|</li>
				ACT.ATagParams = class="nav-link active"

				CUR < .ACT
			}

			#2 < .1
			#2.wrap = <ul class="subnav">|</ul>

			#3 < .2
		}

		meta = COA
		meta {
			20 = HMENU
			20 {
				special = directory
				special.value = {$meinpflegeberuf.pageIds.metaNaviRoot}

				wrap = <ul>|</ul>

				1 = TMENU
				1.NO = 1
				1.wrapItemAndSub = <li>|</li>

				1.ACT < .1.NO
				1.ACT.wrapItemAndSub = <li class="active">|</li>

				1.CUR < .1.ACT
			}
		}

		socials < .meta.20
		socials {
			special.value = {$meinpflegeberuf.pageIds.socialNaviRoot}
			wrap >
			1.NO {
				stdWrap.cObject = TEXT
				stdWrap.cObject {
					wrap = <i class="fab fa-|"></i>
					field = title
				}

				#typolink.parameter.field = url
				#typolink.extTarget.field = target
			}
		}

		breadcrumb = COA
		breadcrumb {
			wrap = <ol class="breadcrumb">|</ol>
			10 = HMENU
			10 {
				special = rootline
				1 = TMENU
				1 {
					NO = 1
					NO.wrapItemAndSub = <li class="breadcrumb-item">|</li>

					CUR < .NO
					CUR.wrapItemAndSub = <li class="breadcrumb-item active">|</li>
					CUR.doNotLinkIt = 1
				}
			}
		}
	}

	contentStage < lib.content_get
	contentStage {
		select.where = {#colPos}=11
	}

	contentMain < lib.content_get
	contentMain {
		select.where = {#colPos}=21
	}

	contentFooter < lib.content_get
	contentFooter {
		select.where = {#colPos}=51
		slide = -1
	}

	superFooter < lib.content_get
	superFooter {
		select.where = {#colPos}=41
		slide = -1
	}
}

[treeLevel = 0]
	lib.nav.breadcrumb >
[global]

/**
* Header w/ tags
*
*/
lib.stdheader.10.setCurrent.htmlSpecialChars = 0

/**
* Lightbox und Title
*
*/
lib.fluidContent.settings.media.popup.linkParams.ATagParams.dataWrap = class="{$styles.content.textmedia.linkWrap.lightboxCssClass}" rel="{$styles.content.textmedia.linkWrap.lightboxRelAttribute}" title="{file:current:title}"

/**
* Includes
*
*/
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:meinpflegeberuf/Configuration/TypoScript/Setup/" extension="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:meinpflegeberuf/Configuration/TypoScript/Extensions/" extension="tssetup">

# Gridelements
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/setup.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bootstrap_grids/Configuration/TypoScript/setup.txt">
