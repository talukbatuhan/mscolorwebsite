import { Machine } from '@/app/types/machine'

export const machines: Machine[] = [
  {
    id: 1,
    brandPrefix: 'SHAKER',
    name: 'MasterMix',
    image: '/machinesPNG/MasterMix.png',
    keyFeaturesKeys: ['m1_key_f_1', 'm1_key_f_2', 'm1_key_f_3', 'm1_key_f_4', 'm1_key_f_5', 'm1_key_f_6', 'm1_key_f_7'],
    details: [
      { featureKey: 'spec_speed', value: '700 rpm' },
      { featureKey: 'spec_eccentric', value: '44 mm' },
      { featureKey: 'spec_screen', value: '2.8" LCD' },
      { featureKey: 'spec_compression', value: 'spec_compressionv_value' },
      { featureKey: 'spec_engine', value: '0.75 KW' },
      { featureKey: 'spec_max_bucket_height', value: '410 mm' },
      { featureKey: 'spec_max_bucket_diameter', value: '432 mm' },
      { featureKey: 'spec_mac_bucket_weight', value: '35 KG' },
      { featureKey: 'spec_power', value: '220V AC/50Hz' },
      { featureKey: 'spec_dimensions', value: '700X720X1290' }
    ]
  },
  {
    id: 2,
    brandPrefix: 'GYROSCOPIC MIXER',
    name: 'GyroMix',
    image: '/machinesPNG/GyroMix.png',
    keyFeaturesKeys: ['m2_key_f_1', 'm2_key_f_2', 'm2_key_f_3', 'm2_key_f_4', 'm2_key_f_5', 'm2_key_f_6', 'm2_key_f_7'],
    details: [
      { featureKey: 'spec_speed', value: 'spec_speed_value' },
      { featureKey: 'spec_timer', value: 'spec_timer_value' },
      { featureKey: 'spec_screen', value: '2.8" LCD' },
      { featureKey: 'spec_compression', value: 'spec_compression_value' },
      { featureKey: 'spec_engine', value: '1.1 KW AC Motor' },
      { featureKey: 'spec_max_bucket_height', value: '410 mm' },
      { featureKey: 'spec_max_bucket_diameter', value: '400 mm' },
      { featureKey: 'spec_mac_bucket_weight', value: '35 KG' },
      { featureKey: 'spec_power', value: '220V AC/50Hz' },
      { featureKey: 'spec_dimensions', value: '800x850x1010 mm' }
    ]
  },
  {
    id: 3,
    brandPrefix: 'DISPENSER',
    name: 'MasterTint',
    image: '/machinesPNG/Dispenser.png',
    keyFeaturesKeys: ['m3_key_f_1', 'm3_key_f_2', 'm3_key_f_3', 'm3_key_f_4', 'm3_key_f_5', 'm3_key_f_6', 'm3_key_f_7'],
    details: [
      { featureKey: 'spec_canister_count', value: 'spec_canister_count_value' },
      { featureKey: 'spec_precision', value: '0.03 ml' },
      { featureKey: 'spec_screen', value: 'spec_screen_value' },
      { featureKey: 'spec_canister_material', value: 'spec_canister_material_value' },
      { featureKey: 'spec_mixing_speed', value: 'spec_mixing_speed_value' },
      { featureKey: 'spec_canister_volume', value: 'spec_canister_volume_value' },
      { featureKey: 'spec_pump_volume', value: 'spec_pump_volume_value' },
      { featureKey: 'spec_elevator', value: 'spec_elevator_value' },
      { featureKey: 'spec_power', value: '220V/50Hz' }
    ]
  }
];