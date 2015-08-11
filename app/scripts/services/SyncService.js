/**
 * Created by mariiazadyra on 8/11/15.
 */
(function() {
    "use strict";

    angular
        .module('syncronizationApp')
        .service('SyncService', SyncService);

   // SyncService.$inject = ['$http'];
    /*@ngInject*/
    function SyncService($http) {
        var Service = {};

        Service.syncModes = [
            {
                name: 'Manual',
                value: 'MANUAL'
            },{
                name: 'Scheduled',
                value: 'SCHEDULED'
            },{
                name: 'Upon event',
                value: 'UPON_EVENT'
            }
        ];

        Service.getSyncJournal = getSyncJournal;
        Service.parseJournalData = parseJournalData;
        Service.getLineDetails = getLineDetails;

        return Service;

        function getSyncJournal() {
            return $http.get('/mock-data/sync_journal.json');
        }

        function parseJournalData(data) {
            var parsedArray = [],
                syncDates,
                syncLineData,
                journalLineObject;

            syncDates = _.pluck(_.uniq(data, 'syncDate'), 'syncDate');

            angular.forEach(syncDates, function(date) {
                syncLineData = _.filter(data, {'syncDate': date});

                journalLineObject = {
                    date: date,
                    elements: syncLineData.length,
                    status: _.findWhere(syncLineData, {'status': 'ERROR'}) ? 'ERROR': 'OK',
                    conflicts: _.filter(syncLineData, {'status': 'CONFLICT'}).length,
                    syncData: syncLineData
                };

                parsedArray.push(journalLineObject);
            });

            return parsedArray;

        }

        function getLineDetails(line) {
            var types = _.pluck(_.uniq(line.syncData, 'type'), 'type'),
                data,
                result = {};

            angular.forEach(types, function(type) {
                data = _.filter(line.syncData, {'type': type});

                result[type] = {
                    count:  data.length,
                    data: _.pluck(data, 'id')
                }
            });

            return result;
        }
    }
})();