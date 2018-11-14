/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutomationClientContext } from "./automationClientContext";


class AutomationClient extends AutomationClientContext {
  // Operation groups
  automationAccount: operations.AutomationAccountOperations;
  operations: operations.Operations;
  statistics: operations.StatisticsOperations;
  usages: operations.Usages;
  keys: operations.Keys;
  certificate: operations.CertificateOperations;
  connection: operations.ConnectionOperations;
  connectionType: operations.ConnectionTypeOperations;
  credential: operations.CredentialOperations;
  dscConfiguration: operations.DscConfigurationOperations;
  hybridRunbookWorkerGroup: operations.HybridRunbookWorkerGroupOperations;
  jobSchedule: operations.JobScheduleOperations;
  linkedWorkspace: operations.LinkedWorkspaceOperations;
  activity: operations.ActivityOperations;
  module: operations.ModuleOperations;
  objectDataTypes: operations.ObjectDataTypes;
  fields: operations.Fields;
  schedule: operations.ScheduleOperations;
  variable: operations.VariableOperations;
  webhook: operations.WebhookOperations;
  watcher: operations.WatcherOperations;
  softwareUpdateConfigurations: operations.SoftwareUpdateConfigurations;
  softwareUpdateConfigurationRuns: operations.SoftwareUpdateConfigurationRuns;
  softwareUpdateConfigurationMachineRuns: operations.SoftwareUpdateConfigurationMachineRuns;
  sourceControl: operations.SourceControlOperations;
  sourceControlSyncJob: operations.SourceControlSyncJobOperations;
  sourceControlSyncJobStreams: operations.SourceControlSyncJobStreams;
  job: operations.JobOperations;
  jobStream: operations.JobStreamOperations;
  agentRegistrationInformation: operations.AgentRegistrationInformation;
  dscNode: operations.DscNodeOperations;
  nodeReports: operations.NodeReports;
  dscCompilationJob: operations.DscCompilationJobOperations;
  dscCompilationJobStream: operations.DscCompilationJobStream;
  dscNodeConfiguration: operations.DscNodeConfigurationOperations;
  nodeCountInformation: operations.NodeCountInformation;
  runbookDraft: operations.RunbookDraftOperations;
  runbook: operations.RunbookOperations;
  testJobStreams: operations.TestJobStreams;
  testJob: operations.TestJobOperations;
  python2Package: operations.Python2Package;

  /**
   * Initializes a new instance of the AutomationClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param countType1 The type of counts to retrieve. Possible values include: 'status',
   * 'nodeconfiguration'
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, countType1: Models.CountType, options?: Models.AutomationClientOptions) {
    super(credentials, subscriptionId, countType1, options);
    this.automationAccount = new operations.AutomationAccountOperations(this);
    this.operations = new operations.Operations(this);
    this.statistics = new operations.StatisticsOperations(this);
    this.usages = new operations.Usages(this);
    this.keys = new operations.Keys(this);
    this.certificate = new operations.CertificateOperations(this);
    this.connection = new operations.ConnectionOperations(this);
    this.connectionType = new operations.ConnectionTypeOperations(this);
    this.credential = new operations.CredentialOperations(this);
    this.dscConfiguration = new operations.DscConfigurationOperations(this);
    this.hybridRunbookWorkerGroup = new operations.HybridRunbookWorkerGroupOperations(this);
    this.jobSchedule = new operations.JobScheduleOperations(this);
    this.linkedWorkspace = new operations.LinkedWorkspaceOperations(this);
    this.activity = new operations.ActivityOperations(this);
    this.module = new operations.ModuleOperations(this);
    this.objectDataTypes = new operations.ObjectDataTypes(this);
    this.fields = new operations.Fields(this);
    this.schedule = new operations.ScheduleOperations(this);
    this.variable = new operations.VariableOperations(this);
    this.webhook = new operations.WebhookOperations(this);
    this.watcher = new operations.WatcherOperations(this);
    this.softwareUpdateConfigurations = new operations.SoftwareUpdateConfigurations(this);
    this.softwareUpdateConfigurationRuns = new operations.SoftwareUpdateConfigurationRuns(this);
    this.softwareUpdateConfigurationMachineRuns = new operations.SoftwareUpdateConfigurationMachineRuns(this);
    this.sourceControl = new operations.SourceControlOperations(this);
    this.sourceControlSyncJob = new operations.SourceControlSyncJobOperations(this);
    this.sourceControlSyncJobStreams = new operations.SourceControlSyncJobStreams(this);
    this.job = new operations.JobOperations(this);
    this.jobStream = new operations.JobStreamOperations(this);
    this.agentRegistrationInformation = new operations.AgentRegistrationInformation(this);
    this.dscNode = new operations.DscNodeOperations(this);
    this.nodeReports = new operations.NodeReports(this);
    this.dscCompilationJob = new operations.DscCompilationJobOperations(this);
    this.dscCompilationJobStream = new operations.DscCompilationJobStream(this);
    this.dscNodeConfiguration = new operations.DscNodeConfigurationOperations(this);
    this.nodeCountInformation = new operations.NodeCountInformation(this);
    this.runbookDraft = new operations.RunbookDraftOperations(this);
    this.runbook = new operations.RunbookOperations(this);
    this.testJobStreams = new operations.TestJobStreams(this);
    this.testJob = new operations.TestJobOperations(this);
    this.python2Package = new operations.Python2Package(this);
  }
}

// Operation Specifications

export {
  AutomationClient,
  AutomationClientContext,
  Models as AutomationModels,
  Mappers as AutomationMappers
};
export * from "./operations";
