namespace $ {
	export class $my_portfolio extends $mol_demo_large {

		/**
		 * ```tree
		 * attr * mol_theme \$mol_theme_auto
		 * ```
		 */
		attr() {
			return {
				mol_theme: "$mol_theme_auto"
			}
		}

		/**
		 * ```tree
		 * title @ \TScorp development portfolio
		 * ```
		 */
		title() {
			return this.$.$mol_locale.text( '$my_portfolio_title' )
		}

		/**
		 * ```tree
		 * sub / <= Page
		 * ```
		 */
		sub() {
			return [
				this.Page()
			] as readonly any[]
		}

		/**
		 * ```tree
		 * image \my/portfolio/logo.svg
		 * ```
		 */
		image() {
			return "my/portfolio/logo.svg"
		}

		/**
		 * ```tree
		 * Image $mol_image uri <= image
		 * ```
		 */
		@ $mol_mem
		Image() {
			const obj = new this.$.$mol_image()

			obj.uri = () => this.image()

			return obj
		}

		/**
		 * ```tree
		 * caffeine $my_portfolio_app
		 * 	title @ \ caffeine
		 * 	details \http://caffeine.uz
		 * ```
		 */
		@ $mol_mem
		caffeine() {
			const obj = new this.$.$my_portfolio_app()

			obj.title = () => this.$.$mol_locale.text( '$my_portfolio_caffeine_title' )
			obj.details = () => "http://caffeine.uz"

			return obj
		}

		/**
		 * ```tree
		 * uztelecom $my_portfolio_app
		 * 	title @ \ uztelecom
		 * 	details \https://uztelecom.uz
		 * ```
		 */
		@ $mol_mem
		uztelecom() {
			const obj = new this.$.$my_portfolio_app()

			obj.title = () => this.$.$mol_locale.text( '$my_portfolio_uztelecom_title' )
			obj.details = () => "https://uztelecom.uz"

			return obj
		}

		/**
		 * ```tree
		 * spphone $my_portfolio_app
		 * 	title @ \ spphone
		 * 	details \https://spphone.uz
		 * ```
		 */
		@ $mol_mem
		spphone() {
			const obj = new this.$.$my_portfolio_app()

			obj.title = () => this.$.$mol_locale.text( '$my_portfolio_spphone_title' )
			obj.details = () => "https://spphone.uz"

			return obj
		}

		/**
		 * ```tree
		 * korean $my_portfolio_app
		 * 	title @ \ Romana
		 * 	details \https://romana.uz/ru
		 * ```
		 */
		@ $mol_mem
		korean() {
			const obj = new this.$.$my_portfolio_app()

			obj.title = () => this.$.$mol_locale.text( '$my_portfolio_korean_title' )
			obj.details = () => "https://romana.uz/ru"

			return obj
		}

		/**
		 * ```tree
		 * mediabox $my_portfolio_app
		 * 	title @ \ mediabox
		 * 	details \https://mediabox.uz
		 * ```
		 */
		@ $mol_mem
		mediabox() {
			const obj = new this.$.$my_portfolio_app()

			obj.title = () => this.$.$mol_locale.text( '$my_portfolio_mediabox_title' )
			obj.details = () => "https://mediabox.uz"

			return obj
		}

		/**
		 * ```tree
		 * sayyidashahlo $my_portfolio_app
		 * 	title @ \ sayyidashahlo
		 * 	details \https://sayyidashahlo.uz
		 * ```
		 */
		@ $mol_mem
		sayyidashahlo() {
			const obj = new this.$.$my_portfolio_app()

			obj.title = () => this.$.$mol_locale.text( '$my_portfolio_sayyidashahlo_title' )
			obj.details = () => "https://sayyidashahlo.uz"

			return obj
		}

		/**
		 * ```tree
		 * Page $mol_page
		 * 	title null
		 * 	head / <= Image
		 * 	body /
		 * 		<= caffeine
		 * 		<= uztelecom
		 * 		<= spphone
		 * 		<= korean
		 * 		<= mediabox
		 * 		<= sayyidashahlo
		 * 	foot / null
		 * ```
		 */
		@ $mol_mem
		Page() {
			const obj = new this.$.$mol_page()

			obj.title = () => null as any
			obj.head = () => [
				this.Image()
			] as readonly any[]
			obj.body = () => [
				this.caffeine(),
				this.uztelecom(),
				this.spphone(),
				this.korean(),
				this.mediabox(),
				this.sayyidashahlo()
			] as readonly any[]
			obj.foot = () => [
				null as any
			] as readonly any[]

			return obj
		}
	}

	export class $my_portfolio_app extends $mol_link {

		/**
		 * ```tree
		 * target \_blank
		 * ```
		 */
		target() {
			return "_blank"
		}

		/**
		 * ```tree
		 * uri <= details
		 * ```
		 */
		uri() {
			return this.details()
		}

		/**
		 * ```tree
		 * preview \
		 * ```
		 */
		preview() {
			return ""
		}

		/**
		 * ```tree
		 * sub /
		 * 	<= Title
		 * 	<= Demo
		 * ```
		 */
		sub() {
			return [
				this.Title(),
				this.Demo()
			] as readonly any[]
		}

		/**
		 * ```tree
		 * details \
		 * ```
		 */
		details() {
			return ""
		}

		/**
		 * ```tree
		 * title \
		 * ```
		 */
		title() {
			return ""
		}

		/**
		 * ```tree
		 * Title $mol_view sub / <= title
		 * ```
		 */
		@ $mol_mem
		Title() {
			const obj = new this.$.$mol_view()

			obj.sub = () => [
				this.title()
			] as readonly any[]

			return obj
		}

		/**
		 * ```tree
		 * background \
		 * ```
		 */
		background() {
			return ""
		}

		/**
		 * ```tree
		 * Demo $mol_demo_ext
		 * 	style * background-image <= background
		 * 	uri <= details
		 * ```
		 */
		@ $mol_mem
		Demo() {
			const obj = new this.$.$mol_demo_ext()

			obj.style = () => ({
				"background-image": this.background()
			})
			obj.uri = () => this.details()

			return obj
		}
	}

}
