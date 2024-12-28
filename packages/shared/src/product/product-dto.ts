import type { LicensedFileDTO } from '@shared/licensed-file/licensed-file-dto.js';
import type { ChartDataDTO } from '@shared/chart/ChartDataDTO.js';

export interface ProductDto {
  id: number;
  name: string;
  description: string;
  licensedFile: LicensedFileDTO;
  price: number;
  costOfProduction: number;
  pricePerMonthChartData: ChartDataDTO;
}
