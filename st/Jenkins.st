Smalltalk current createPackage: 'Jenkins' properties: #{}!
Object subclass: #Jenkins
	instanceVariableNames: ''
	category: 'Jenkins'!

!Jenkins class methodsFor: 'not yet classified'!

fetchFor: aURL onSuccess: successBlock onError: errorBlock
	^ self fetchFor: aURL depth: 0 onSuccess: successBlock onError: errorBlock.
!

fetchFor: aURL onSuccess: successBlock
	^ self fetchFor: aURL depth: 0 onSuccess: successBlock onError: [].
!

fetchFor: aURL depth: infoDepth onSuccess: successBlock
	"Fetch for a given URL, this is assumed not to be a raw URL, i.e. not including the /api/ portion of the URL"
	self fetchFor: aURL depth: infoDepth onSuccess: successBlock onError: [].
!

fetchFor: aURL depth: infoDepth onSuccess: successBlock onError: errorBlock
	"Fetch for a given URL, this is assumed not to be a raw URL, i.e. not including the /api/ portion of the URL"
	jQuery ajax: aURL, '/api/json?depth=', infoDepth asString
		options: #{'type' -> 'GET'.
					'jsonp' -> 'jsonp'.
					'dataType' -> 'jsonp'.
					'success' -> successBlock.
					'error' -> errorBlock}.
! !

