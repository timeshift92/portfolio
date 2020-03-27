namespace $ { export class $my_portfolio extends $mol_demo_large {

	/**
	 *  ```
	 *  attr * mol_theme \$mol_theme_auto
	 *  ```
	 **/
	attr() {
		return ({
			"mol_theme" :  "$mol_theme_auto" ,
		})
	}

	/**
	 *  ```
	 *  title @ \TScorp development portfolio
	 *  ```
	 **/
	title() {
		return this.$.$mol_locale.text( "$my_portfolio_title" )
	}

	/**
	 *  ```
	 *  sub / <= Page
	 *  ```
	 **/
	sub() {
		return [ this.Page() ] as readonly any[]
	}

	/**
	 *  ```
	 *  Page $mol_page
	 *  	title null
	 *  	head / <= Image
	 *  	body /
	 *  		<= caffeine
	 *  		<= uztelecom
	 *  		<= spphone
	 *  		<= korean
	 *  		<= mediabox
	 *  	foot / null
	 *  ```
	 **/
	@ $mol_mem
	Page() {
		return (( obj )=>{
			obj.title = () => null as any
			obj.head = () => [ this.Image() ] as readonly any[]
			obj.body = () => [ this.caffeine() , this.uztelecom() , this.spphone() , this.korean() , this.mediabox() ] as readonly any[]
			obj.foot = () => [ null as any ] as readonly any[]
			return obj
		})( new this.$.$mol_page(  ) )
	}

	/**
	 *  ```
	 *  Image $mol_image uri <= image
	 *  ```
	 **/
	@ $mol_mem
	Image() {
		return (( obj )=>{
			obj.uri = () => this.image()
			return obj
		})( new this.$.$mol_image(  ) )
	}

	/**
	 *  ```
	 *  image \my/portfolio/logo.svg
	 *  ```
	 **/
	image() {
		return "my/portfolio/logo.svg"
	}

	/**
	 *  ```
	 *  caffeine $my_portfolio_app
	 *  	title @ \ caffeine
	 *  	details \http://caffeine.uz
	 *  ```
	 **/
	@ $mol_mem
	caffeine() {
		return (( obj )=>{
			obj.title = () => this.$.$mol_locale.text( "$my_portfolio_caffeine" )
			obj.details = () => "http://caffeine.uz"
			return obj
		})( new this.$.$my_portfolio_app(  ) )
	}

	/**
	 *  ```
	 *  uztelecom $my_portfolio_app
	 *  	title @ \ uztelecom
	 *  	details \https://uztelecom.uz
	 *  ```
	 **/
	@ $mol_mem
	uztelecom() {
		return (( obj )=>{
			obj.title = () => this.$.$mol_locale.text( "$my_portfolio_uztelecom" )
			obj.details = () => "https://uztelecom.uz"
			return obj
		})( new this.$.$my_portfolio_app(  ) )
	}

	/**
	 *  ```
	 *  spphone $my_portfolio_app
	 *  	title @ \ spphone
	 *  	details \https://spphone.uz
	 *  ```
	 **/
	@ $mol_mem
	spphone() {
		return (( obj )=>{
			obj.title = () => this.$.$mol_locale.text( "$my_portfolio_spphone" )
			obj.details = () => "https://spphone.uz"
			return obj
		})( new this.$.$my_portfolio_app(  ) )
	}

	/**
	 *  ```
	 *  korean $my_portfolio_app
	 *  	title @ \ korean
	 *  	details \https://korean.uz
	 *  ```
	 **/
	@ $mol_mem
	korean() {
		return (( obj )=>{
			obj.title = () => this.$.$mol_locale.text( "$my_portfolio_korean" )
			obj.details = () => "https://korean.uz"
			return obj
		})( new this.$.$my_portfolio_app(  ) )
	}

	/**
	 *  ```
	 *  mediabox $my_portfolio_app
	 *  	title @ \ mediabox
	 *  	details \https://mediabox.uz
	 *  ```
	 **/
	@ $mol_mem
	mediabox() {
		return (( obj )=>{
			obj.title = () => this.$.$mol_locale.text( "$my_portfolio_mediabox" )
			obj.details = () => "https://mediabox.uz"
			return obj
		})( new this.$.$my_portfolio_app(  ) )
	}

} }

namespace $ { export class $my_portfolio_app extends $mol_link {

	/**
	 *  ```
	 *  target \_blank
	 *  ```
	 **/
	target() {
		return "_blank"
	}

	/**
	 *  ```
	 *  uri <= details
	 *  ```
	 **/
	uri() {
		return this.details()
	}

	/**
	 *  ```
	 *  details \
	 *  ```
	 **/
	details() {
		return ""
	}

	/**
	 *  ```
	 *  preview \
	 *  ```
	 **/
	preview() {
		return ""
	}

	/**
	 *  ```
	 *  sub /
	 *  	<= Title
	 *  	<= Demo
	 *  ```
	 **/
	sub() {
		return [ this.Title() , this.Demo() ] as readonly any[]
	}

	/**
	 *  ```
	 *  Title $mol_view sub / <= title
	 *  ```
	 **/
	@ $mol_mem
	Title() {
		return (( obj )=>{
			obj.sub = () => [ this.title() ] as readonly any[]
			return obj
		})( new this.$.$mol_view(  ) )
	}

	/**
	 *  ```
	 *  title \
	 *  ```
	 **/
	title() {
		return ""
	}

	/**
	 *  ```
	 *  Demo $mol_demo_ext
	 *  	style * background-image <= background
	 *  	uri <= details
	 *  ```
	 **/
	@ $mol_mem
	Demo() {
		return (( obj )=>{
			obj.style = () => ({
			"background-image" :  this.background() ,
		})
			obj.uri = () => this.details()
			return obj
		})( new this.$.$mol_demo_ext(  ) )
	}

	/**
	 *  ```
	 *  background \
	 *  ```
	 **/
	background() {
		return ""
	}

} }

