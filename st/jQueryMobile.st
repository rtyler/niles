Smalltalk current createPackage: 'jQueryMobile' properties: #{}!
Widget subclass: #JQPage
	instanceVariableNames: 'elementId'
	category: 'jQueryMobile'!

Widget subclass: #JQListItem
	instanceVariableNames: 'elementId href label clickBlock theme iconUrl'
	category: 'jQueryMobile'!

!JQListItem methodsFor: 'not yet classified'!

renderOn: html
	html li 
		at: 'data-theme' put: theme;
		with: [
			html a
				href: href;
				onClick: clickBlock;
				with: [
					iconUrl ifNotNil: [ html img src: iconUrl; class: 'ui-li-thumb ui-corner-tl' ].
					html with: label]].
!

initialize
	href := '#'.
	label := ''.
	clickBlock := [].
	theme := ''.
	iconUrl := nil.
!

withLabel: aLabelString
	label := aLabelString asString.
!

turnYellow
	" The 'e' theme in jQuery Mobile is yellowish "
	theme := 'e'.
!

addIcon: aUrl
	iconUrl := aUrl asString.
!

withHref: aUrlString
	href := aUrlString.
!

withOnClick: aBlock
	clickBlock := aBlock.
! !

Widget subclass: #JQList
	instanceVariableNames: 'elementId'
	category: 'jQueryMobile'!

!JQList methodsFor: 'not yet classified'!

renderOn: html
	html ul 
		id: self elementId;
		at: 'data-role' put: 'listview';
		at: 'data-inset' put: 'true'.

	self asJQuery listview.
!

asJQuery
	^ ('#', self elementId) asJQuery.
!

elementId
	^ elementId.
!

withId: aString
	elementId := aString.
!

add: aLabel withCallback: aBlock
	"Add a list item"
	[ :html |
		html li with: [ html a href: '#'; with: aLabel; onClick: aBlock ].
	] appendToJQuery: self asJQuery.

	self asJQuery listview: 'refresh'.
!

add: aLabel
	"Add a list item with no callback"
	^ self add: aLabel withCallback: [].
!

empty
	"Clear out the entire list"
	self asJQuery empty.
!

addItem: aListItem
	aListItem appendToJQuery: self asJQuery.
	self asJQuery listview: 'refresh'.
! !

