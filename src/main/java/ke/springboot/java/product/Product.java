package ke.springboot.java.product;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import ke.springboot.java.category.Category;

@Entity
public class Product {
	
	@Id
	private String id;
	private String name;
	private String description;
	private String category;
	
//	@ManyToOne
//	private Category category; //each film is now tied to a particular topic as a foreign key
	
	public Product() {
		
	}
	
	public Product(String id, String name, String description, String category) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.category = category;
		//this.category = new Category (categoryId, "", ""); //makes it easier to create new course objects with a given topic
	}
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	
	

}
