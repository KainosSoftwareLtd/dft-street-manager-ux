module.exports.setSessionData = function (sessionData, data) {
  // Plan & create
  sessionData['promotername'] = data.promoterName
  sessionData['usrn'] = data.USRN
  sessionData['roadcategorygroup'] = data.roadCategoryGroup
  sessionData['highwayauthority'] = data.highwayAuthority
  sessionData['workreferencenumber'] = data.workReferenceNumber
  sessionData['start-day'] = data.startDay
  sessionData['start-month'] = data.startMonth
  sessionData['start-year'] = data.startYear
  sessionData['end-day'] = data.endDay
  sessionData['end-month'] = data.endMonth
  sessionData['end-year'] = data.endYear
  sessionData['duration'] = data.duration
  sessionData['trafficmanagementtypegroup'] = data.trafficManagementTypeGroup
  sessionData['workcategorygroup'] = data.workCategoryGroup
  sessionData['Screen1Complete'] = data.screen1Complete
  // Location & contact
  sessionData['works-location-description'] = data.worksLocationDescription
  sessionData['works-location-group'] = data.worksLocationGroup
  sessionData['description-of-work-group'] = data.descriptionOfWorkGroup
  sessionData['description-of-work-2'] = data.descriptionOfWork2
  sessionData['excavation-group'] = data.excavationGroup
  sessionData['contact-details'] = data.contactDetails
  sessionData['promoter-agent'] = data.promoterAgent
  sessionData['secondary-contact'] = data.secondaryContact
  sessionData['commercially-sensitive-group'] = data.commerciallySensitiveGroup
  sessionData['lane-rental-group'] = data.laneRentalGroup
  sessionData['Screen2Complete'] = data.screen2Complete
  // Conditions
  sessionData['conditions-name'] = data.conditionsName
  sessionData['conditions-reason'] = data.conditionsReason
  sessionData['Screen3Complete'] = data.screen3Complete
  // Collaboration
  sessionData['tm-group'] = data.tmGroup
  sessionData['file-attached-detail'] = data.fileAttachedDetail
  sessionData['file-attached-name'] = data.fileAttachedName
  sessionData['collaboration-group'] = data.collaborationGroup
  sessionData['collaboration-type-group'] = data.collaborationTypeGroup
  sessionData['collaboration-details'] = data.collaborationDetails
  sessionData['environmental-health-group'] = data.environmentalHealthGroup
  sessionData['project-reference'] = data.projectReference
  sessionData['Screen4Complete'] = data.screen4Complete
  // Assess
  sessionData['Screen5Complete'] = data.screen5Complete
  // On Site
  sessionData['actual-start-date-day'] = data.actualStartDateDay
  sessionData['actual-start-date-month'] = data.actualStartDateMonth
  sessionData['actual-start-date-year'] = data.actualStartDateYear
  sessionData['actual-start-date-hour'] = data.actualStartDateHour
  sessionData['actual-start-date-minute'] = data.actualStartDateMinute
  sessionData['actualEndDateDay'] = data.actualEndDateDay
  sessionData['actualEndDateMonth'] = data.actualEndDateMonth
  sessionData['actualEndDateYear'] = data.actualEndDateYear
  sessionData['actualEndDateHour'] = data.actualEndDateHour
  sessionData['actualEndDateMinute'] = data.actualEndDateMinute
  sessionData['excavation-required-group'] = data.excavationRequiredGroup
  sessionData['Screen6Complete'] = data.screen6Complete
  // Inspections
  sessionData['inspection-type-group'] = data.inspectionTypeGroup
  sessionData['inspection-date-day'] = data.inspectionDateDay
  sessionData['inspection-date-month'] = data.inspectionDateMonth
  sessionData['inspection-date-year'] = data.inspectionDateYear
  sessionData['outcome-group'] = data.outcomeGroup
  sessionData['inspection-attached-detail'] = data.inspectionAttachedDetail
  sessionData['inspection-attached-name'] = data.inspectionAttachedName
  sessionData['Screen8Complete'] = data.screen8Complete
  // Reinstatement
  sessionData['reinstatement-status-group'] = data.reinstatementStatusGroup
  sessionData['reinstatement-date-day'] = data.reinstatementDateDay
  sessionData['reinstatement-date-month'] = data.reinstatementDateMonth
  sessionData['reinstatement-date-year'] = data.reinstatementDateYear
  sessionData['depth-group'] = data.depthGroup
  sessionData['length'] = data.length
  sessionData['width'] = data.width
  sessionData['location-x'] = data.locationX
  sessionData['location-y'] = data.locationY
  sessionData['works-position-group'] = data.worksPositionGroup
  sessionData['location-description'] = data.worksLocationDescription
  sessionData['warranty-end-date-day'] = data.warrantyEndDateDay
  sessionData['warranty-end-date-month'] = data.warrantyEndDateMonth
  sessionData['warranty-end-date-year'] = data.warrantyEndDateYear
  sessionData['Screen7Complete'] = data.screen7Complete
  sessionData['ReinstatementRequired'] = data.reinstatementRequired
}
