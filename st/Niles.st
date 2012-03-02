Smalltalk current createPackage: 'Niles' properties: #{}!
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
			| item |
			item := JQListItem new
					withLabel: job name;
					withHref: job url;
					withOnClick: [ :event | window alert: ('Navigating to: ', job name). event preventDefault ].
			job color = 'yellow' ifTrue: [ item turnYellow ].
			job description size > 0
				ifTrue: [ item withDescription: job description ].
			"(job healthReport size) > 0
				ifTrue: [item addIcon: 'http://ci.jenkins-ci.org/images/48x48/', ((job healthReport at: 1) at: 'iconUrl')].
			"list addItem: item.]]
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

