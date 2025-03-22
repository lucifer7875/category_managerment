import Category from "./categoryModel";

export default class CategoryUtils {
    public getCategories = async () => {
        const categories = await Category.find();
        return categories;
    }

    public getCategoryById = async (id: string) => {
        const category = await Category.findById(id);
        if (!category) {
            throw new Error();
        }
        return category;
    }

    public createCategory = async (body: any) => {
        const { name, parentCategory, status } = body;
        const category = await Category.create({ name, parentCategory, isActive: status });
        return category;
    }

    public updateCategory = async (id: string, body: any) => {
        const { name, parentCategory, status } = body;
        const category = await Category.findByIdAndUpdate(id, { name, parentCategory, isActive: status }, { new: true });
        return category;
    }

    public deleteCategory = async (id: string) => {
        const category = await Category.findById(id);
        if (!category) {
            throw new Error();
        }
        const deletedCategory = await Category.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        return deletedCategory;
    }
}

