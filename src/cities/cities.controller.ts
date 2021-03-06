import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { City } from './cities.entity';
import { CitiesService } from './cities.service';

@Crud({
  model: {
    type: City
  },
  params: {
    id: {
      type: 'uuid',
      primary: true,
      field: 'id',
    },
  },
  query: {
    join: {
      region: {
        eager: true,
      },
      'region.country': {
        eager: true,
      },
    },
  },
})

@ApiTags('Cities')
@Controller('cities')
export class CitiesController implements CrudController<City>{
  constructor(public readonly service: CitiesService) {
  }
}
