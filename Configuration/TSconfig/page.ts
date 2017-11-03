tx_gridelements {
	excludeLayoutIds = slider,tabsSimple,tabs4,tabs6,accordion,slider

	setup {
#		specialbox {
#			title = Spezial Box
#			description = Box mit Bild links und Inhalt rechts
#			icon = EXT:bootstrap_grids/Resources/Public/Icons/gridlayout_col2.gif
#			frame = 1
#			topLevelLayout = 1
#			config {
#				colCount = 1
#				rowCount = 1
#				rows.1 {
#					columns {
#						1 {
#							name = LLL:EXT:bootstrap_grids/Resources/Private/Language/locallang_db.xlf:celayout.rightColumn
#							colPos = 101
#						}
#					}
#				}
#			}
#
#			flexformDS = FILE:EXT:befra_template/Resources/Extensions/gridelements/flexform_specialbox.xml
#		}
	}
}

// for pages
TCEMAIN.table.pages {
	disablePrependAtCopy = 1
	disableHideAtCopy = 0
}

// for content elements
TCEMAIN.table.tt_content {
	disablePrependAtCopy = 1
	disableHideAtCopy = 1
}

// Not used CEs
TCEFORM.tt_content.CType {
	removeItems = text,textpic,image,login,div
}

TCEFORM.tt_content.header_layout.removeItems = 0,5,6
TCEFORM.tt_content.header_layout.altLabels {
	1 = H1
	2 = H2
	3 = H3
	4 = H4
}
TCEFORM.tt_content.bullets_type.altLabels {
	0 = Liste mit Linien (ul)
	1 = nummerierte Liste
	2 = Definitions Liste
}
TCEFORM.tt_content.layout.altLabels.1 = runde Bilder
TCEFORM.tt_content.layout.removeItems = 2,3

# Image orientation setup
TCEFORM.tt_content.imageorient {
	removeItems = 1,2,9,10,17,18,25,26
	altLabels.0 = oben
	altLabels.8 = unten
}

# Image columns setup
TCEFORM.tt_content.imagecols {
	removeItems = 5,6,7,8
}

TCAdefaults.tt_content.imagecols = 1


// Backend layouts
//

mod.web_layout.BackendLayouts {
	1 {
		title = Startseite
		#icon = EXT:example_extension/Resources/Public/Images/BackendLayouts/default.gif
		config {
			backend_layout {
				colCount = 4
				rowCount = 4
				rows {
					1 {
						columns {
							1 {
								name = Stage
								colPos = 11
								colspan = 4
								allowed = textmedia,list
								allowedGridType =
							}
						}
					}

					2 {
						columns {
							1 {
								name = Inhalt
								colPos = 21
								colspan = 4
								allowed = *
								allowedGridType = *
							}
						}
					}

					3 {
						columns {
							1 {
								name = Footer
								colPos = 51
								colspan = 4
								allowed = *
								allowedGridType = *
							}
						}
					}
					4 {
						columns {
							1 {
								name = Nicht verwendete Elemente
								colPos = -2
								colspan = 4
								allowed = *
								allowedGridType = *
							}
						}

					}
				}
			}
		}
	}

	2 {
		title = Standard-Seite
		#icon = EXT:example_extension/Resources/Public/Images/BackendLayouts/default.gif
		config {
			backend_layout {
				colCount = 4
				rowCount = 3
				rows {
					1 {
						columns {
							1 {
								name = Stage
								colPos = 11
								colspan = 4
								allowed = textmedia,list
								allowedGridType =
							}
						}
					}
					2 {
						columns {
							1 {
								name = Inhalt
								colPos = 21
								colspan = 4
								allowed = *
								allowedGridType = *
							}
						}
					}
					3 {
						columns {
							1 {
								name = Nicht verwendete Elemente
								colPos = -2
								colspan = 4
								allowed = *
								allowedGridType = *
							}
						}

					}
				}
			}
		}
	}
}


// RTE
//

# Set Editor preferences
RTE.default.preset = fetscher_preset
RTE.config.tt_content.bodytext.preset = fetscher_preset
#RTE.config.tx_news_domain_model_news.bodytext.preset = default
