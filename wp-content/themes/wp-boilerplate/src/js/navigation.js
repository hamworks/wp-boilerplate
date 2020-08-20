/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function () {
	const container = document.querySelector( '.site-navigation' );
	if ( ! container ) {
		return;
	}

	const buttons = document.querySelectorAll( '.site-navigation-toggle' );
	if ( buttons.length === 0 ) {
		return;
	}

	const menu = container.querySelector( 'ul' );

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		buttons.forEach( ( button ) => {
			button.style.display = 'none';
		} );
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	const toggleButton = ( element ) => {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			document
				.querySelector( 'body' )
				.classList.remove( 'show-navigation' );
			element.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			document.querySelector( 'body' ).classList.add( 'show-navigation' );
			element.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

	buttons.forEach( ( button ) => {
		button.addEventListener( 'click', ( event ) => {
			toggleButton( event.currentTarget );
		} );
	} );

	// Get all the link elements within the menu.
	const links = menu.querySelectorAll( 'a' );
	// Each time a menu link is focused or blurred, toggle focus.
	links.forEach( ( link ) => {
		link.addEventListener( 'focus', toggleFocus, true );
		link.addEventListener( 'blur', toggleFocus, true );
	} );

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		let self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {
			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

	/**
	 * Toggles `focus` class to allow submenu access on tablets.
	 */
	const parentLink = container.querySelectorAll(
		'.menu-item-has-children > a, .page_item_has_children > a'
	);
	let touchStartFn;
	if ( 'ontouchstart' in window ) {
		touchStartFn = function ( e ) {
			const menuItem = this.parentNode;

			if ( ! menuItem.classList.contains( 'focus' ) ) {
				e.preventDefault();
				for (
					let i = 0;
					i < menuItem.parentNode.children.length;
					++i
				) {
					if ( menuItem === menuItem.parentNode.children[ i ] ) {
						continue;
					}
					menuItem.parentNode.children[ i ].classList.remove(
						'focus'
					);
				}
				menuItem.classList.add( 'focus' );
			} else {
				menuItem.classList.remove( 'focus' );
			}
		};

		for ( let i = 0; i < parentLink.length; ++i ) {
			parentLink[ i ].addEventListener(
				'touchstart',
				touchStartFn,
				false
			);
		}
	}
} )();
