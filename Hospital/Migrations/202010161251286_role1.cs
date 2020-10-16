namespace Hospital.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class role1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.RoleViewModels",
                c => new
                    {
                        id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.RoleViewModels");
        }
    }
}
