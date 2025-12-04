import { defineBackend } from '@aws-amplify/backend';
import { imagesStorage } from './storage/resource';
import { EventType } from 'aws-cdk-lib/aws-s3';
import { LambdaDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend=defineBackend({
  auth,
  data,
  imagesStorage, 
});


