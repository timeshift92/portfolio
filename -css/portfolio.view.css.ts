namespace $ { $mol_style_attach( "my/portfolio/portfolio.view.css",
 "[my_portfolio_scroll] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tpadding: .5rem;\n}\n\n\n[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\n@media (prefers-color-scheme: light) {\n\t[mol_theme=\"$mol_theme_auto\"] {\n\t\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t\t--mol_theme_text: rgba( 0 , 0 , 0 , .9 );\n\t\t--mol_theme_control: hsl(267, 45%, 35%,0.5);\n\t\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t\t--mol_theme_focus: hsla( 0 , 60% , 50% , 0.75 );\n\t\t--mol_theme_field: white;\n\t}\n}\n\n@media (prefers-color-scheme: dark) {\n\t[mol_theme=\"$mol_theme_auto\"] {\n\t\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t\t--mol_theme_hover: #333;\n\t\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t\t--mol_theme_text: rgba( 255 , 255 , 255 , .8 );\n\t\t--mol_theme_control: hsl(267, 45%, 35%);\n\t\t--mol_theme_shade: rgb(43, 17, 64);\n\t\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t\t--mol_theme_focus: rgba( 204 , 68 , 50 , .75 );\n\t\t--mol_theme_field: black;\n\t}\n}\n\n[my_portfolio] {\n\tdisplay: flex;\n\tbackground: var(--mol_theme_field);\n}\n[my_portfolio_page_head]{\n\tdisplay: flex;\n\tjustify-content: start;\n\tbackground: #553282;\n}\n[my_portfolio_app]{\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1 1 26rem;\n\tmargin: 0;\n\theight: 15.5rem;\n\tcursor: pointer;\n}\n[my_portfolio_image]{\n\tbox-shadow: none;\n\tmax-width: 15vh;\n\t\n}\n[my_portfolio_app_title]{\n\tcolor: #553282;\n}\n\n[my_portfolio_app]{\n\tmargin: 10px;\n    -webkit-box-shadow: 8px 0px 20px -2px rgb(85, 39, 97);\n    -moz-box-shadow: 8px 0px 20px -2px rgb(85, 39, 97);\n    box-shadow: 8px 0px 20px -2px var(--mol_theme_shade);\n}\n[my_portfolio_app_demo]{\n\tpointer-events: none;\n\tbox-shadow: 0 0 0 2px var(--mol_theme_line);\n\twidth: 200%;\n\theight: 26rem;\n\ttransform: translate( -25% , -25% ) scale( .5 );\n\tbackground-size: cover;\n}\n"
) }