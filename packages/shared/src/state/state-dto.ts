import type { LicensedFileDTO } from '@shared/licensed-file/licensed-file-dto.js';
import type { ChartDataDTO } from '@shared/chart/ChartDataDTO.js';

export interface StateDto {
  name: string;
  description: string;
  economicalSituation: number;
  flag: LicensedFileDTO;
  economicalSituationPerMonthChartData: ChartDataDTO;
}
