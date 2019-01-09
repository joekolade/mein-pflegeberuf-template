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

	googlefont = https://fonts.googleapis.com/css?family=Signika:300,600
	googlefont.external = 1
}

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

	logoFile = TEXT
	logoFile.value = {$meinpflegeberuf.site.logoFile}

	sitename = TEXT
	sitename.value = {$meinpflegeberuf.site.name}

	pageIds_root = TEXT
	pageIds_root.value = {$meinpflegeberuf.pageIds.root}

	features_use_quicklink = TEXT
	features_use_quicklink.value = {$meinpflegeberuf.features.use_quicklink}
	features_use_lang_switch = TEXT
	features_use_lang_switch.value = {$meinpflegeberuf.features.use_lang_switch}
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
			wrap = <ul class="navbar-nav">|</ul>
			1 = TMENU
			1 {
				expAll = 1

				NO = 1
				NO.wrapItemAndSub = <li class="nav-item">|</li>
				NO.ATagParams = class="nav-link"

				ACT < .NO
				ACT.wrapItemAndSub = <li class="nav-item active">|</li>
				ACT.ATagParams = class="nav-link active" rel="nofollow"

				CUR < .ACT
			}

			2 < .1
			2.wrap = <ul class="subnav">|</ul>

			3 < .2

		}

		quicklink = TEXT
		quicklink {
			typolink.parameter = {$meinpflegeberuf.pageIds.stellenList}
			typolink.ATagParams = class="navbar-text d-md-none"
			value = {$meinpflegeberuf.text.stellenangebote}
			stdWrap.noTrimWrap = ||  <i class="far fa-search"></i>|
		}
		quicklink >

		meta = COA
		meta {
			20 = HMENU
			20 {
				special = directory
				special.value = {$meinpflegeberuf.pageIds.metaNaviRoot}

				wrap = <ul class="list-unstyled">|</ul>

				1 = TMENU
				1.NO = 1
				1.NO.wrapItemAndSub = <li>|</li>

				1.ACT < .1.NO
				1.ACT.wrapItemAndSub = <li class="active">|</li>

				1.CUR < .1.ACT
			}
		}

		socials = COA
		socials {
			10 < lib.meta.20
			10 {
				special.value = {$meinpflegeberuf.pageIds.socialNaviRoot}
				wrap >
				1.NO {
					wrapItemAndSub = |
					stdWrap.cObject = TEXT
					stdWrap.cObject {
						wrap = <i class="fab fa-|"></i>
						field = title
					}

					#typolink.parameter.field = url
					#typolink.extTarget.field = target
				}
			}
		}

        mobile = COA
        mobile {
            10 < lib.nav.main
            10 {
                wrap = <ul class="nav flex-column">|</ul>

                1.NO.ATagParams = class="nav-link" rel="nofollow"
                1.ACT.ATagParams = class="nav-link active" rel="nofollow"
                1.CUR.ATagParams = class="nav-link active" rel="nofollow"

                2 < .1
                2.wrap = <a class="btn btn-primary submenu-toggle"><i class="far fa-angle-down"></i></a><ul class="subnav">|</ul>

                3 < .2
            }

            # Flags
            20 >

            30 = CONTENT
            30 {
                table = tt_content
                select {
                    pidInList = {$meinpflegeberuf.pageIds.root}
                    uidInList = {$meinpflegeberuf.contentIds.contact}
                }
            }

            #40 < lib.navi.socials

            50 < lib.nav.meta
			50.stdWrap.wrap = <nav class="frame metastellenList">|</nav>
        }

		breadcrumb = COA
		breadcrumb {
			wrap = <ol class="breadcrumb d-none d-sm-block">|</ol>
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
		breadcrumb >
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
* Features
*/
/* Auskommentiert 20.9. christian
TEMP.langMenu = COA
TEMP.langMenu {
	10 = IMAGE
	10 {
		altText = {$meinpflegeberuf.text.de}
		file = EXT:meinpflegeberuf/Resources/Public/Images/flag-germany.svg
		file.width = 25
		stdWrap.typolink.parameter = {$meinpflegeberuf.pageIds.home_de}
		stdWrap.typolink.ATagParams = class="language"
	}

	20 < .10
	20.Text= {$meinpflegeberuf.text.pl}
	20.titleText = {$meinpflegeberuf.text.pl}
	20.file = EXT:meinpflegeberuf/Resources/Public/Images/flag-poland.svg
	20.stdWrap.typolink.parameter = {$meinpflegeberuf.pageIds.home_pl}

}

[globalVar = LIT:{$meinpflegeberuf.features.use_lang_switch} > 0]
	lib.nav.socials.20 < TEMP.langMenu
	lib.nav.mobile.20 < TEMP.langMenu
	lib.nav.mobile.20.stdWrap.wrap = <nav class="lang frame">|</nav>
[global]
*/

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


# RLMP Languagedetection
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rlmp_language_detection/Configuration/TypoScript/setup.txt">

# Gridelements
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/setup.ts">

/**
* Includes
*
*/
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:meinpflegeberuf/Configuration/TypoScript/Setup/" extension="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:meinpflegeberuf/Configuration/TypoScript/Extensions/" extension="tssetup">

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bootstrap_grids/Configuration/TypoScript/setup.txt">