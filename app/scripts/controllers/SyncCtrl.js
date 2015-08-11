/**
 * Created by mariiazadyra on 8/11/15.
 */
(function() {
    "use strict";

    angular
        .module('syncronizationApp')
        .controller('SyncCtrl', SyncCtrl);

    /*@ngInject*/

    function SyncCtrl($timeout, SyncService) {
        var vm = this,
            syncTimeMock = 1000;

        vm.syncDate = null;
        vm.showProgress = false;
        vm.isJournalAvailable = false;
        vm.journalData = [];

        vm.syncModes = SyncService.syncModes;
        vm.syncMode = vm.syncModes[0];

        vm.syncNow = syncNow;
        vm.getLineDetails = getLineDetails;

        activate();

        function activate() {}

        function syncNow() {
            vm.showProgress = true;
            vm.isJournalAvailable = false;

            SyncService
                .getSyncJournal()
                .then(
                    function(response) {

                        $timeout(function() {
                            var date;

                            vm.showProgress = false;

                            date = new Date();
                            vm.syncDate = date.getTime();

                            vm.isJournalAvailable = true;
                            vm.journalData = SyncService.parseJournalData(response.data);

                        }, syncTimeMock);

                    },
                    function() {}
                );

        }

        function getLineDetails(line) {

            vm.isDetailsVisible = true;
            vm.detailsDate = line.date;

            vm.lineDetails = SyncService.getLineDetails(line);
        }
    }
})();