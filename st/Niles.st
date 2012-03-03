Smalltalk current createPackage: 'Niles' properties: #{}!
Object subclass: #Job
	instanceVariableNames: 'description url buildable stable myname page'
	category: 'Niles'!

!Job methodsFor: 'not yet classified'!

initialize
	description := ''.
	url := ''.
	buildable := false.
	stable := false.
	myname := ''.
!

fromDictionary: aDictionary
	myname := aDictionary name.
	url := aDictionary url.
	description := aDictionary description.
	buildable := aDictionary buildable.
	aDictionary color = 'blue'
		ifTrue: [ stable := true ].
!

asListItem
	"Return a JQListItem representing this Job object"
	| item |
	item := JQListItem new
			withLabel: myname;
			withOnClick: [ :event |
				| page |
				page := self asPage.
				page appendToJQuery: 'body' asJQuery.
				<jQuery.mobile.changePage('#' + page._elementId());>.
				event preventDefault ].
	stable ifFalse: [ item turnYellow ].
	description size > 0
				ifTrue: [ item withDescription: description ].
	^ item.
!

asPage
	^ page ifNil: [
		page := JQPage new
				withContent: [ :html | self renderPageOn: html ];
				named: myname].
!

renderPageOn: html
	html with: 'I am the renderPageOn method for: ', myname.
! !

Object subclass: #NilesApp
	instanceVariableNames: 'list'
	category: 'Niles'!

!NilesApp methodsFor: 'not yet classified'!

clear
	'#niles-content' asJQuery empty.
	list := nil.
!

load: aUrl
	self clear.
	list ifNil: [ 
		list := JQList new.
		list appendToJQuery: '#niles-content' asJQuery].

	Jenkins fetchFor: aUrl
		depth: 1
		onSuccess: [ :data | data jobs do: [ :job |
			| item njob |
			njob := Job new fromDictionary: job.
			list addItem: njob asListItem.]]
		onError: [ window alert: 'Fucking fuck' ].
!

submitForm
	self load: '#url-input' asJQuery val.
! !

NilesApp class instanceVariableNames: 'app'!

!NilesApp class methodsFor: 'not yet classified'!

current
	"Return the current instance (singleton) of NilesApp"
	^ app
		ifNil: [ app := super new ].
! !

