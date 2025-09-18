import {
    BadRequestException,
    ConflictException,
    Controller,
    Get,
    HttpStatus,
    NotFoundException,
    Param,
    Req,
    Res,
    UnauthorizedException,
    UnprocessableEntityException,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { ERROR_RESPONSE, SUCCESS } from 'src/common/constants';
import { ErrorLogInterface } from 'src/common/interfaces';
import { CustomLoggerService } from 'src/infrastructure/logging/logger.service';
import { PCIDeviceService } from './pci-device.service';

@Controller('pci-devices')
export class PCIDeviceController {
    constructor(
        private readonly pciDeviceService: PCIDeviceService,
        private readonly logger: CustomLoggerService,
    ) { }

    @Get('inventory/:region')
    async getAvailableInventory(
        @Req() req: FastifyRequest,
        @Res() res: FastifyReply,
        @Param('region') region: string,
    ) {
        try {
            this.pciDeviceService.setPciDeviceRepository(region);
            const inventory = await this.pciDeviceService.fetchAvailableInventory();

            return res.status(HttpStatus.OK).send({
                error: false,
                message: SUCCESS,
                data: { inventory },
            });
        } catch (error) {
            return this.handleError(error, req, res, this.getAvailableInventory.name);
        }
    }

    @Get('inventory/:region/product/:productId')
    async getAvailableInventoryByProductId(
        @Req() req: FastifyRequest,
        @Res() res: FastifyReply,
        @Param('region') region: string,
        @Param('productId') productId: string,
    ) {
        try {
            this.pciDeviceService.setPciDeviceRepository(region);
            const count = await this.pciDeviceService.fetchAvailableInventoryByProductID(productId);

            return res.status(HttpStatus.OK).send({
                error: false,
                message: SUCCESS,
                data: {
                    productId,
                    availableCount: count,
                },
            });
        } catch (error) {
            return this.handleError(error, req, res, this.getAvailableInventoryByProductId.name);
        }
    }

    private handleError(error: unknown, req: FastifyRequest, res: FastifyReply, functionName: string) {
        const errorObj: ErrorLogInterface = {
            request: req,
            error,
            functionName: `PCIDeviceController/${functionName}`,
        };
        this.logger.errorLog(errorObj);

        if (error instanceof NotFoundException) {
            return res.status(HttpStatus.NOT_FOUND).send({ error: true, message: error.message });
        } else if (error instanceof UnauthorizedException) {
            return res.status(HttpStatus.UNAUTHORIZED).send({ error: true, message: error.message });
        } else if (error instanceof UnprocessableEntityException) {
            return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({
                error: true,
                message: error.message,
            });
        } else if (error instanceof ConflictException) {
            return res.status(HttpStatus.CONFLICT).send({ error: true, message: error.message });
        } else if (error instanceof BadRequestException) {
            return res.status(HttpStatus.BAD_REQUEST).send({ error: true, message: error.message });
        } else {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(ERROR_RESPONSE);
        }
    }
}