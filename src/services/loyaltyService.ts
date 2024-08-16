import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class LoyaltyService {
    async getAllLoyalties() {
        try {
            return await prisma.loyalty.findMany();
        } catch (error) {
            console.error("Error al obtener todos los datos:", error);
            throw error;
        }
    }

    async createLoyalty(data: any) {
        try {
            return await prisma.loyalty.create({
                data: {
                    qualicationId: data.qualicationId,  // Verifica si data.qualicationId está presente y definido
                    donationId: data.donationId,
                    donatorId: data.donatorId,
                    organizationId: data.organizationId,
                    qualityCalification: data.qualityCalification, // Corrige si es necesario
                    timeCalification: data.timeCalification, // Corrige si es necesario
                    packagingCalification: data.packagingCalification, // Corrige si es necesario
                    communicationCalification: data.communicationCalification, // Corrige si es necesario
                    generalScore: data.generalScore,
                    notes: data.notes,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt,
                },
            });
        } catch (error) {
            console.error("Error al crear el dato:", error);
            throw error;
        }
    }
    

    async updateLoyalty(id: string, data: any) {
        try {
            const updatedLoyalty = await prisma.loyalty.update({
                where: { id },
                data: {
                    qualicationId: data.qualicationId,
                    donationId: data.donationId,
                    donatorId: data.donatorId,
                    organizationId: data.organizationId,
                    qualityCalification: data.qualityCalification,
                    timeCalification: data.timeCalification,
                    packagingCalification: data.packagingCalification,
                    communicationCalification: data.communicationCalification,
                    generalScore: data.generalScore,
                    notes: data.notes,
                    updatedAt: new Date(), 
                },
            });
            return updatedLoyalty;
        } catch (error: any) { // Le indicamos a TypeScript que 'error' puede ser de cualquier tipo
            if (error.code === 'P2025') { // Verificamos la existencia de 'code' antes de acceder a ella
                console.error("Loyalty not found with id:", id);
                throw new Error('Loyalty not found');
            }
            console.error("Error al actualizar el dato:", error);
            throw error;
        }
    }
    
    

    async deleteLoyalty(id: string) {
        try {
            await prisma.loyalty.delete({
                where: { id },
            });
        } catch (error) {
            console.error("Error al eliminar el dato:", error);
            throw error;
        }
    }
}
