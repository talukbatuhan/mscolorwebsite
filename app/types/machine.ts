export interface MachineDetail {
  featureKey: string;
  value: string;
}

export interface Machine {
  id: number;
  brandPrefix: string;
  name: string;
  image: string;
  keyFeaturesKeys: string[];
  details: MachineDetail[];
}